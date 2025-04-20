import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1">
      <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-gray-600">hello@example.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
