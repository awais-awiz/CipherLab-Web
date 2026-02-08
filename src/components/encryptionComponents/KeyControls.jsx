import { KeyOptions } from "@/components/customComponents/KeyOptions";

export const KeyControls = ({
    cipherType,
    keyType,
    setKeyType,
    outputType,
    setOutputType,
}) => {
    return (
        <KeyOptions
            keyType={keyType}
            setKeyType={setKeyType}
            outputType={outputType}
            setOutputType={setOutputType}
            showKeyType={cipherType === "rc4"}
        />
    );
};
