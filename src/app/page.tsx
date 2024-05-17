import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/4b197969-b5e8-4a4f-bb5e-2880e65b7969-z7psj.jpg",
  "https://utfs.io/f/6af5aeec-f4bf-47d0-aa44-94b30f09dc67-58mzwi.jpg",
  "https://utfs.io/f/e269f799-b05a-45cf-b321-06c8030ec981-toadum.jpg",
  "https://utfs.io/f/d411ce7c-2ff2-4c85-b91f-a72366f2be5b-d0zxob.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
