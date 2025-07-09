import Breadcrumb from "../components/Breadcrumb";

export default function ClientPage() {
  const logos = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/logo${i}/400/300`);

  return (
    <>
    <Breadcrumb 
     title="Our Happy Clients"
  items={[
    { label: 'Home', link: '/' },
    { label: 'clients', link: '/client' }
  ]}
  />
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {logos.map((url, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-md p-2 flex items-center justify-center">
              <img src={url} alt={`Client logo ${idx + 1}`} className=" object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
