import ProductCard from "./productCard";
// import product1 from "../assets/image/product1.jpg";
// import product2 from "../assets/image/product2.jpg";
// import product3 from "../assets/image/product3.jpg";
import product1 from "../assets/image/mobile.png";
import product2 from "../assets/image/headphones.jpeg";
import product3 from "../assets/image/laptop.jpeg";

const products = [
  {
    id: 1,
    name: "Phone",
    price: 350,
    image: product1,
    desc: "Introducing the stunning OPPO Glow Edition in Elegant Purple – a perfect blend of style and performance. Designed with a sleek matte finish and a signature glow pattern, this phone stands out with its eye-catching pastel shade. Equipped with a powerful triple rear camera setup, it lets you capture every moment in crisp detail, whether it's a scenic landscape or a perfect selfie. The immersive punch-hole display offers a seamless viewing experience, ideal for streaming, browsing, or gaming. Under the hood, it packs a fast processor that ensures smooth multitasking and responsive performance. With a long-lasting battery and fast-charging support, you stay powered throughout the day without interruptions. Whether you're a photography enthusiast, a social media lover, or a multitasker on the go, the OPPO Glow Edition is designed to keep up with your lifestyle – all while looking effortlessly elegant in your hand.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 100,
    image: product2,
    desc: "Elevate your audio experience with these stylish Blue Wireless Over-Ear Headphones, crafted for rich sound and all-day comfort. Engineered for deep bass, crisp highs, and balanced mids, they deliver immersive, studio-quality sound whether you're on the move or relaxing at home. The sleek matte blue finish adds a bold, modern touch to your look, while the ergonomic design ensures a snug and comfortable fit for extended listening sessions. With wireless Bluetooth connectivity, you can enjoy seamless music streaming and hands-free calls without the hassle of tangled wires. The built-in controls make it easy to adjust volume, skip tracks, or answer calls with a single touch. Offering up to 40 hours of battery life, these headphones are perfect for long commutes, workouts, or binge-watching sessions, and they recharge quickly so you're never without your music. Whether you're a casual listener or an audiophile, these headphones combine iconic design with powerful performance to deliver sound the way it was meant to be heard. Step up your audio game and turn heads with these premium wireless headphones – where style meets substance.",
  },
  {
    id: 3,
    name: "Laptop",
    price: 860,
    image: product3,
    desc: "Experience sleek performance and elegant design with the Microsoft Surface Laptop – your perfect everyday companion for work, creativity, and entertainment. Featuring a vibrant 13.5 PixelSense™ touchscreen display with ultra-slim bezels, this laptop delivers stunning visuals and responsive interaction, whether you're browsing, sketching, or streaming. Powered by the latest Intel® Core™ processor and equipped with fast SSD storage, it offers smooth multitasking, quick boot times, and efficient performance for students, professionals, and creators alike. Its lightweight, ultra-thin aluminum build makes it easy to carry, while the all-day battery life ensures productivity on the go. The keyboard is designed for comfortable typing with precision and quiet keys, and the large trackpad offers smooth navigation. With built-in Windows 11, seamless Microsoft 365 integration, and strong security features like facial recognition, this laptop is built to keep you connected, productive, and secure. Whether you're attending virtual meetings, designing graphics, or writing reports, the Microsoft Surface Laptop offers premium performance wrapped in a minimalist and modern aesthetic. Ready to redefine your workflow and boost your creativity – all in one powerful and portable package.",
  },
];

export default function ProductList({ onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}
