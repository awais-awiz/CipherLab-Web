import { Infotip } from "@/components/customComponents/infotip";

const KEY_TYPE_OPTIONS = [
  { value: "ascii", label: "ASCII Key" },
  { value: "hex", label: "HEX Key" },
  { value: "utf8", label: "UTF-8 Key" },
];

const OUTPUT_FORMAT_OPTIONS = [
  { value: "ascii", label: "ASCII Output" },
  { value: "hex", label: "HEX Output" },
  { value: "base64", label: "Base64 Output" },
];

export const KeyOptions = ({
  keyType,
  setKeyType,
  outputType,
  setOutputType,
  showKeyType = true,   // toggle if needed
}) => {
  return (
    <div className="flex gap-6 mt-4 w-full">

      {showKeyType && (
        <Infotip
          label="Key Type"
          value={keyType}
          onChange={setKeyType}
          options={KEY_TYPE_OPTIONS}
          info
        />
      )}

      <Infotip
        label="Output Format"
        value={outputType}
        onChange={setOutputType}
        options={OUTPUT_FORMAT_OPTIONS}
        info
      />

    </div>
  );
};
