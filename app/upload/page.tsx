'use client';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicId, setPublicId] = useState('');
	return (
		<>
			{publicId && (
				<CldImage
					src={publicId}
					width={270}
					height={180}
					alt='A random image'
				/>
			)}
			<CldUploadWidget
				uploadPreset='pox2mbbq'
				onSuccess={(result, widget) => {
					console.log({ result, widget });
					const info = result.info as CloudinaryResult;
					const _publicId = info.public_id;
					setPublicId(_publicId);
				}}
			>
				{({ open }) => (
					<button className='btn btn-primary' onClick={() => open()}>
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
