import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  title: string;
};

type FileWithPreview = File & {
  preview?: string;
};

export default function CreateSpecialties() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>();
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    console.log('Files:', files);
    
    // Prepare form data for actual submission
    const formData = new FormData();
    formData.append('email', data.title);
    files.forEach(file => {
      formData.append('files', file);
    });

    // In a real app, you would upload files to a server here:
    // fetch('your-upload-endpoint', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => {
        if (file.type.startsWith('image/')) {
          return Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
        }
        return file;
      });
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles(prev => {
      const newFiles = prev.filter(file => file.name !== fileName);
      // Revoke object URLs for image previews
      const fileToRemove = prev.find(file => file.name === fileName);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return newFiles;
    });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form className="py-6 px-9" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
              Add Specialties Title:
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { 
                required: "Title  is required",
              })}
              placeholder="Add Specialties Title"
              className={`w-full rounded-md border ${errors.title ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div className="mb-8">
              <input 
                type="file" 
                id="file" 
                className="sr-only" 
                onChange={handleFileChange}
                multiple
                accept="*/*" // or specify file types like "image/*,.pdf,.doc,.docx"
              />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center hover:border-[#6A64F1] transition-colors cursor-pointer"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-white">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            {files.map((file) => (
              <div key={file.name} className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {file.preview && (
                      <img 
                        src={file.preview} 
                        alt={file.name} 
                        className="w-10 h-10 object-cover rounded mr-3"
                      />
                    )}
                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                      {file.name}
                    </span>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeFile(file.name)}
                    className="text-[#07074D] hover:text-red-500"
                    aria-label={`Remove ${file.name}`}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {file.type} • {(file.size / 1024).toFixed(2)} KB
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              disabled={files.length === 0}
              className={`w-full rounded-md ${files.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6A64F1] hover:shadow-form'} py-3 px-8 text-center text-base font-semibold text-white outline-none transition-all`}
            >
              Send {files.length > 0 ? `(${files.length}) ` : ''}File{files.length !== 1 ? 's' : ''}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}