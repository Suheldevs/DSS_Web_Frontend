import Breadcrumb from "../components/Breadcrumb";
import c1 from "../assets/client/alyantra.jpg";
import c2 from "../assets/client/barista.jpg";
import c3 from "../assets/client/bhalla.jpg";
import c4 from "../assets/client/bikaner.jpg";
import c6 from "../assets/client/coca-cola.jpg";
import c7 from "../assets/client/dr-bagchi.jpg";
import c8 from "../assets/client/f.jpg";
import c9 from "../assets/client/golden-tea.jpg";
import c10 from "../assets/client/health-city-vistra.jpg";
import c11 from "../assets/client/naushijaan.jpg";
import c12 from "../assets/client/rolex.jpg";
import c13 from "../assets/client/rominus.jpg";
import c14 from "../assets/client/salasar.jpg";
import c15 from "../assets/client/slmg.jpg";
import c16 from "../assets/client/smile-n-glow.jpg";
import c17 from "../assets/client/uday.jpg";
import c18 from "../assets/client/webley.jpg";

const clients = [
  { name: "alyantra", logo: c1 },
  { name: "barista", logo: c2 },
  { name: "bhalla", logo: c3 },
  { name: "bikaner", logo: c4 },
  { name: "coca-cola", logo: c6 },
  { name: "dr-bagchi", logo: c7 },
  { name: "f", logo: c8 },
  { name: "golden-tea", logo: c9 },
  { name: "health-city-vistra", logo: c10 },
  { name: "naushijaan", logo: c11 },
  { name: "rolex", logo: c12 },
  { name: "rominus", logo: c13 },
  { name: "salasar", logo: c14 },
  { name: "slmg", logo: c15 },
  { name: "smile-n-glow", logo: c16 },
  { name: "uday", logo: c17 },
  { name: "webley", logo: c18 },
];
export default function ClientPage() {


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
          {clients?.map((url, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-md p-2 flex items-center justify-center">
              <img src={url?.logo} loading="lazy" alt={`Client logo ${idx + 1}`} className=" object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
