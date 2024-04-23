"use client";

import Card from "../components/Card";
import PersonalForm from "../components/PersonalForm";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}


export default function PersonalInfoForm() {
  return (
    <Card
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <PersonalForm />
    </Card>
  );
}
