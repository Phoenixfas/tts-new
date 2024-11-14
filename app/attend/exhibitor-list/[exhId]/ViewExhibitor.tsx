'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import exhibitors from "@/data/exhibitors";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import Link from "next/link";
import useClientFetch from "@/hooks/useClientFetch";

export default function ViewExhibitor() {
    const { exhId } = useParams();
    const [exhibitor, setExhibitor] = useState<any>(null);
    const { data: exhibitors = [], loading, error } = useClientFetch("exhibitors");

    useEffect(() => {
        if (exhId && exhibitors) {
            const foundExhibitor = exhibitors.find((exhibitor: any) => exhibitor._id === exhId);
            setExhibitor(foundExhibitor);
        }
    }, [exhId, exhibitors]);

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <div className="w-16 h-16 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
            </div>

        ); // Optionally, show a loading state
    }

    if (error) {
        console.error(error);
    }

    return (
        <div className="w-full py-40 flex flex-col items-center bg-gradient-to-br from-[#050752] to-[#4EAEE5]">
            {exhibitor &&    
                <div className="w-full max-w-[800px] flex flex-col gap-5 border border-white rounded-lg p-5">
                    <div className="flex items-center gap-10">
                        <Image className="w-[150px] h-[150px] object-cover rounded-md" src={exhibitor.logo} alt={exhibitor.company_name} width={500} height={300} />
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl font-bold text-white">{exhibitor.company_name}</h1>
                            <div className="flex items-center gap-2 text-white">
                                <FaLocationPin />
                                <p>{exhibitor.vendor_loc}</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {exhibitor.sectors.map((sector: string, index: number) => (
                                    <div key={index} className="bg-[#78e0f4] text-[#050752] rounded-sm py-1 px-2 text-xs font-semibold">{sector}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <h2 className="text-xl font-semibold">About {exhibitor.company_name}</h2>
                        <p className="text-lg font-light mb-3">{exhibitor.description}</p>
                        <h2 className="text-xl font-semibold">Products</h2>
                        <div className="flex gap-5 mb-3">
                            {exhibitor.products.map((product: any, index: number) => (
                                <Image key={index} src={product.image} alt={product.name} className="w-[100px] h-[100px] object-cover rounded-md" width={300} height={300} />
                            ))}
                        </div>
                        <h2 className="text-xl font-semibold">Website</h2>
                        {exhibitor.company_website && (
                            <Link className="text-lg font-light text-[#78e0f4] mb-3" href={exhibitor.company_website}>
                                {exhibitor.company_website}
                            </Link>
                        )}
                        <h2 className="text-xl font-semibold">Country</h2>
                        <p className="text-lg font-light text-[#78e0f4] mb-3">{exhibitor.country}</p>
                    </div>
                </div>
            }
        </div>
    );
}
