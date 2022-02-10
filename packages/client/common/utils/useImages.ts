import { useState } from 'react';

export const useImages = () => {
  const [images, setImages] = useState<string[]>(['']);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageArray = Array.from(event.target.files as FileList);
    imageArray.map((image) => createBase64Image(image));
  };

  const createBase64Image = (image: any) => {
    if (!image) return;

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
      setImages((images) => [...images, `${reader.result}`]);
    });
  };

  return { images, handleImage };
};


  // useEffect(() => {
  //   setImages((images) => {
  //     let results = [];

  //     for (var i = 0; i < localStorage.length; i++) {
  //       results.push(localStorage.getItem(localStorage.key(i)));
  //     }
  //     return results;
  //   });
  // });