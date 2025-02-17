"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      setSubmitResult({ success: true, message: "Message sent successfully!" })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitResult({ success: false, message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          required
        />
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
          required
        />
      </div>
      <Input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
        required
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 min-h-[150px]"
        required
      />
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting}
      >
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {submitResult && (
        <p className={`text-center ${submitResult.success ? "text-green-500" : "text-red-500"}`}>
          {submitResult.message}
        </p>
      )}
    </form>
  )
}

