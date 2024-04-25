"use client";
import Card from "../components/Card";
import PersonalForm from "../components/Forms/PersonalForm";
import TopBar from "../components/TopBar";

export default function PersonalInfoForm() {
  return (
    <>
      <TopBar />
      <Card
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <PersonalForm />
      </Card>
    </>
  );
}
