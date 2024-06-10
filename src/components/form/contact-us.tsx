import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 *:space-y-2 *:flex *:flex-col *:items-start">
      <div className="md:col-span-1    ">
        <Label htmlFor="message">Your Name</Label>
        <Input placeholder="Your Name" />
      </div>
      <div className="md:col-span-1 ">
        <Label htmlFor="message">Email</Label>
        <Input placeholder="Your Email" />
      </div>
      <div className="md:col-span-2 ">
        <Label htmlFor="message">Subject</Label>
        <Input placeholder="Subject" />
      </div>
      <div className="md:col-span-2 ">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Write your message" />
      </div>
      <Button className="col-span-2 w-20">Send</Button>
    </div>
  );
}
