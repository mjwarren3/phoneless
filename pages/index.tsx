import PhoneLayout from '@/layouts/layout'
import { AlarmClock, BookOpen, Calendar, Camera, Dumbbell, Gamepad2, Map, Music, NotepadText, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import posthog from 'posthog-js'

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
    {
        "name": "Music",
        "icon": <Music size={40} />,
        "href": "/music"
    },
    {
        "name": "Maps",
        "icon": <Map size={40} />,
        "href": "/maps"
    },
    {
        "name": "Alarm",
        "icon": <AlarmClock size={40} />,
        "href": "/alarm"
    },
    {
        "name": "Books",
        "icon": <BookOpen size={40} />,
        "href": "/books"
    },
    {
        "name": "Games",
        "icon": <Gamepad2 size={40} />,
        "href": "/games"
    },
    {
        "name": "Fitness",
        "icon": <Dumbbell size={40} />,
        "href": "/fitness"
    },
    {
        "name": "Calendar",
        "icon": <Calendar size={40} />,
        "href": "/calendar"
    },
]

function page() {
  return (
        <PhoneLayout>
            <div className="grid grid-cols-4 gap-6 px-4 py-12">
                {apps.map((app) => (
                    <Link
                        href={app.href}
                        key={app.name}
                        onClick={() => posthog.capture('category_clicked', { category: app.name.toLowerCase(), href: app.href })}
                    >
                        <div className="h-16 w-16 flex flex-col shadow-[0_0_20px_-15px_rgba(0,0,0,1)] rounded-2xl justify-center items-center text-slate-700">
                            {app.icon}
                        </div>
                        <p className="ml-2 mt-1 text-slate-700 text-center font-medium text-xs">{app.name}</p>
                    </Link>
                ))}
            </div>
        </PhoneLayout>

  )
}

export default page