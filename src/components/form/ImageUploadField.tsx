import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Controller } from "react-hook-form";

interface ImageUploadProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  rules?: object;
  placeholder?: string;
}

const ImageUploadField: React.FC<ImageUploadProps> = ({
  name,
  control,
  rules,
}) => {
  return (
    <div>
      <label className="uppercase text-md block text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-4">
        {name}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Upload
              listType="picture"
              fileList={field.value || []}
              onChange={({ fileList }) => field.onChange(fileList)}
              beforeUpload={() => false} // Prevent auto-upload
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            {fieldState.error && (
              <p className="text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default ImageUploadField;
