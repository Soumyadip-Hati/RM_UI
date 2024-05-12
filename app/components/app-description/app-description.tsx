import "./app-description.css";

export default function AppDescription() {
    return (
        <div className="px-5">
            <div className="flex py-5 justify-between items-end app-desc">
                <h1 className="text-8xl lh-small">
                    Tiretech <br />
                    App <br />
                    Manager
                </h1>
                <div className="text-lg w-2/5">
                    Manage Identity, Access, Releases, LifeCycle of all Tiretech apps in a single platform.
                    Raise requests to get access to the Tiretech apps. Get authorized to Group based access as per the authorization level.
                    Manage and monitor all app releases. Get control over application lifecyle as deemed fit tby @Continental.
                </div>
            </div>
            <hr className="h-0.5 bg-orange-200" />
            <div className="py-5">
                <div className="animator-desc-video">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="relative">
                    <video autoPlay muted loop src="/videos/2078088-uhd_3840_1634_25fps.mp4" className="rounded" />
                </div>
            </div>
        </div>
    )
}