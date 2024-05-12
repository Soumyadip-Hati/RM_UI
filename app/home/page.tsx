import AppDescription from '../components/app-description/app-description';
import './home-page.css';


export default function Home() {
    return (
        <div className="px-5">
            <AppDescription/>            
            <div className='py-5 inline-block'>
                <div className='inline-block [&>h1]:text-5xl [&>h1]:inline-block [&>div]:inline-block [&>div]:rounded-full [&>div]:bg-orange-300 [&>div]:h-5 [&>div]:w-5'>
                    <h1>Access Request</h1><div></div>
                    <h1>Create Release</h1><div></div>
                    <h1>Manage App</h1><div></div>
                    <h1>Manage App</h1><div></div>
                </div>
                <div className='inline-block [&>h1]:text-5xl [&>h1]:inline-block [&>div]:inline-block [&>div]:rounded-full [&>div]:bg-orange-300 [&>div]:h-5 [&>div]:w-5'>
                    <h1>Access Request</h1><div></div>
                    <h1>Create Release</h1><div></div>
                    <h1>Manage App</h1><div></div>
                    <h1>Manage App</h1><div></div>
                </div>
            </div>
        </div>
    );
}
