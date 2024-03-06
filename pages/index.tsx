import PhoneLayout from '@/layouts/layout'
import { Camera, Map, NotepadText, Phone } from 'lucide-react'
import React from 'react'

const apps = [
    {
        "name": "Camera",
        "icon": <Camera size={40} />,
        "href": "/camera"
    },
    {
        "name": "Notes",
        "icon": <NotepadText size={40} />,
        "href": "/notes"
    },
    {
        "name": "Phone",
        "icon": <Phone size={40} />,
        "href": "/phone"
    },

]

function page() {
  return (
        <PhoneLayout>
            <div className="grid grid-cols-4 gap-6 px-4 py-12">
                {apps.map((app) => (
                    <a href={app.href} key={app.name}>
                        <div className="h-16 w-16 flex flex-col shadow-[0_0_20px_-15px_rgba(0,0,0,1)] rounded-2xl justify-center items-center text-slate-700">
                            {app.icon}
                        </div>
                        <p className="ml-2 mt-1 text-slate-700 text-center font-medium text-xs">{app.name}</p>
                    </a>
                ))}
            </div>
        </PhoneLayout>

  )
}

export default page