import SuccessAlert from "./SuccessAlert";
import { PageProps } from "@/types";
import DangerAlert from "./DangerAlert";

export default function FlashAlerts({ flash }: { flash: any }) {
    return (
        <>
            {flash?.success && (
                <SuccessAlert title={flash.message} message={flash?.success} />
            )}

            {flash?.error && (
                <DangerAlert title={flash.message} message={flash?.error} />
            )}
        </>
    );
}
