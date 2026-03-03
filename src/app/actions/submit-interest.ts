"use server";

import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    referrer: z.string().optional(),
    amount: z.number().min(5000, "Minimum investment is typically $5,000 for RUVs"),
    capitalType: z.enum(["Personal", "Fund/Family Office"]),
    background: z.string().min(10, "Please provide a brief background"),
    howCanHelp: z.string().optional(),
    citizenship: z.string().min(1, "Citizenship country is required"),
    notRestrictedCountry: z.boolean().refine((val) => val === true, {
        message: "You must confirm you are not from a restricted country."
    }),
    isAccredited: z.boolean().optional(),
    consentToStore: z.boolean().refine((val) => val === true, {
        message: "You must consent to data storage to proceed."
    }),
});

export type InterestFormState = {
    success: boolean;
    errors?: Record<string, string[]>;
    message?: string;
};

export async function submitInterestForm(
    prevState: InterestFormState,
    formData: FormData
): Promise<InterestFormState> {
    const rawData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        city: formData.get("city"),
        country: formData.get("country"),
        referrer: formData.get("referrer"),
        amount: formData.get("amount") ? Number(formData.get("amount")) : undefined,
        capitalType: formData.get("capitalType"),
        background: formData.get("background"),
        howCanHelp: formData.get("howCanHelp"),
        citizenship: formData.get("citizenship"),
        notRestrictedCountry: formData.get("notRestrictedCountry") === "on",
        isAccredited: formData.get("isAccredited") === "on",
        consentToStore: formData.get("consentToStore") === "on",
    };

    const parsed = formSchema.safeParse(rawData);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
            message: "Please fix the errors in the form.",
        };
    }

    // TODO: Add actual database integration here (e.g., Supabase / PostgreSQL)
    // TODO: Add email service integration (Resend / SendGrid) to notify invest@hemut.com

    console.log("New Investor Interest Submission:", parsed.data);

    // Simulate network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return {
        success: true,
        message: "Thank you for your interest. We will be in touch shortly.",
    };
}
