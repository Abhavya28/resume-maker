"use client";

import { FormField } from "../inputField";

interface Props {
    data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        linkedinURL: string;
        githubURL: string;
        cityState: string;
        country: string;
    };
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

export default function PersonalDetails({ data, onChange }: Props) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <p className="text-gray-500">Users who added phone number and email received 64% more positive feedback from recruiters.</p>

            <div className="grid grid-cols-2 gap-4">
                <FormField
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    placeholder=""
                    value={data.firstName}
                    onChange={onChange}
                    required
                />

                <FormField
                    label="Last Name"
                    name="lastName"
                    id="lastName"
                    placeholder=""
                    value={data.lastName}
                    onChange={onChange}
                />
            </div>

            <FormField
                label="Email"
                name="email"
                id="email"
                placeholder="username@email.com"
                value={data.email}
                onChange={onChange}
                required
            />

            <FormField
                label="Phone"
                name="phone"
                id="phone"
                placeholder=""
                value={data.phone}
                onChange={onChange}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                    label="Linkedin URL"
                    name="linkedinURL"
                    id="linkedinURL"
                    placeholder="linkedin.com/in/yourprofile"
                    value={data.linkedinURL}
                    onChange={onChange}
                />

                <FormField
                    label="Github URL"
                    name="githubURL"
                    id="githubURL"
                    placeholder="github.com/yourprofile"
                    value={data.githubURL}
                    onChange={onChange}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <FormField
                    label="City, State"
                    name="cityState"
                    id="cityState"
                    placeholder="City, State"
                    value={data.cityState}
                    onChange={onChange}
                />

                <FormField
                    label="Country"
                    name="country"
                    id="country"
                    placeholder=""
                    value={data.country}
                    onChange={onChange}
                />
            </div>



        </div>
    );
}