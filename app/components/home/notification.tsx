import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "~/const";
import NotificationStore from "~/state/home/notification";

interface NotificationProps {
    userid: string;
}

const Notification: React.FC<NotificationProps> = (props: NotificationProps): JSX.Element => {
    const open = NotificationStore((state) => state.isOpen)

    const [notification, setNotification] = useState<any[]>([]);


    const init = async () => {
        let req = {
            search: {
                status: 3,
                influencer: props.userid
            }
        };
        const responseData = await axios.post(
            `${BaseUrl}/api/search-draft`,
            req
        );
        console.log(responseData.data);
        if (responseData.data.status) {
            setNotification(val => responseData.data.data)
        }
    };

    useEffect(() => {
        init();
    }, []);


    return (
        <>
            <div className={`${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl overflow-y-scroll`}>
                {
                    notification.map((val: any, index: number) => <div><NotificationTab image={val.brand.logo} title={val.influencer.name} description={`Your campaign draft request is ${val.status.name}.`}></NotificationTab></div>)
                }
            </div>
        </>
    );
}


export default Notification;

interface NotificationTabProps {
    image: string;
    title: string;
    description: string;
}

const NotificationTab: React.FC<NotificationTabProps> = (props: NotificationTabProps): JSX.Element => {


    return (
        <>
            <div className="w-full border-b-2 border-gray-400 flex py-4">
                <div className="mr-4">
                    <img src={props.image} alt="error" className="w-14 h-14 rounded-lg shrink-0 object-cover object-center" />
                </div>
                <div>
                    <p className="text-gray-500 font-semibold text-lg leading-normal w-40">
                        {props.title}
                    </p>
                    <p className="text-gray-500 font-normal text-sm leading-normal w-40">
                        {props.description}
                    </p>
                </div>
            </div>

        </>
    );
}