"use server"

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const investmentSize = formData.get("investmentSize") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Debug: Check if API key exists
    console.log("Resend API Key exists:", !!process.env.RESEND_API_KEY)
    console.log("API Key length:", process.env.RESEND_API_KEY?.length || 0)

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing Resend API key")
      return {
        success: false,
        error: "Email service not configured. Please contact us directly at info@capfund.capital.",
      }
    }

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${investmentSize ? `<p><strong>Investment Size:</strong> ${investmentSize}</p>` : ""}
        </div>

        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
          <h3 style="color: #334155; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>This message was sent from the Collective Alpha Partners website contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            dateStyle: "full",
            timeStyle: "short",
          })}</p>
        </div>
      </div>
    `

    const emailPayload = {
      from: "CAP Website <onboarding@resend.dev>",
      to: ["info@capfund.capital"],
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: htmlContent,
      reply_to: email,
    }

    console.log("Sending email with payload:", JSON.stringify(emailPayload, null, 2))

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    console.log("Resend response status:", response.status)
    console.log("Resend response headers:", Object.fromEntries(response.headers.entries()))

    const responseText = await response.text()
    console.log("Resend response body:", responseText)

    if (!response.ok) {
      console.error("Resend API error:", {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      })

      // Parse error for better user feedback
      let errorMessage = "Failed to send email. Please contact us directly at info@capfund.capital."

      try {
        const errorData = JSON.parse(responseText)
        if (errorData.message) {
          console.error("Resend error message:", errorData.message)
          if (errorData.message.includes("API key")) {
            errorMessage = "Email service authentication failed. Please contact us directly."
          }
        }
      } catch (parseError) {
        console.error("Could not parse error response:", parseError)
      }

      return {
        success: false,
        error: errorMessage,
      }
    }

    const result = JSON.parse(responseText)
    console.log("Email sent successfully:", result.id)

    return {
      success: true,
      message: "Thank you for your message. We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "There was an error sending your message. Please contact us directly at info@capfund.capital.",
    }
  }
}
