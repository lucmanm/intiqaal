import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const tHero = useTranslations("hero");
  const tImage = useTranslations("hero.images");
  const images = ["docker", "github", "gitlab", "google", "k8s", "oracle", "redhat"] as const;
  return (
    <div className="hero min-h-screen bg-base-200 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="h-[400px] w-auto rounded-lg shadow-2xl"
          width={100}
          height={100}
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <section className="bg-slate-800 flex flex-col md:grid md:grid-cols-3 p-8">
  //     <div className="flex-1 max-w-lg col-span-2">
  //       <h1 className="text-4xl lg:text-5xl font-bold mb-6">
  //         {tHero("title")}
  //       </h1>
  //       <p className="text-lg mb-6">{tHero("description")}</p>
  //       <div className="flex items-center space-x-4 mb-6">
  //         <input
  //           type="email"
  //           placeholder={tHero("emailPlaceholder")}
  //           className="p-3 rounded-md text-gray-800 flex-1"
  //         />
  //         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
  //           {tHero("signUp")}
  //         </button>
  //       </div>
  //       <div className="flex items-center space-x-4 mb-6">
  //         <span className="text-gray-400">{tHero("reviews")}</span>
  //         <span className="text-gray-400">{tHero("noCreditCard")}</span>
  //       </div>
  //     </div>
  //     <div className=" col-span-1">

  //     </div>

  //     <div className="col-span-4 flex gap-4 justify-evenly py-8">
  //       {images.map((image) => (
  //         <div key={image} className="flex items-center space-x-2">
  //           <Image
  //             src={tImage(`${image}.imageUrl`)}
  //             alt={""}
  //             width={100}
  //             height={100}
  //             className="h-8 md:h-20 w-auto"
  //           />

  //           {/* <span className="text-white">{tImage(`${image}.imageName`)}</span> */}
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
}
