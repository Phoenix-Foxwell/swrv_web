import { ConAlert } from "~/components/utils/alert";

const Welcome: React.FC = (): JSX.Element => {
    return (
        <>
            <div className="min-h-screen w-full grid place-items-center">
                <ConAlert></ConAlert>
            </div>
        </>
    );
}

export default Welcome;