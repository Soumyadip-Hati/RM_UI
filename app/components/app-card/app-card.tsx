import Image from "next/image";
import React from "react";
import App from "../../models/app";
import AppCardProps from "../../models/props/appCard.props";

export default function AppCard(props: React.PropsWithChildren<AppCardProps>) {

    const { app, key } = props;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src="/images/logo_1.webp" alt="logo" width={200} height={100} priority />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{app.name}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
}