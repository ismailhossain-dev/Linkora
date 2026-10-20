"use client";
import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const NewsSearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleChange = (value: string) => {
    //bad approch because rendering issue
    //update value in the api
    // const params = new URLSearchParams()

    //       if(value){
    //           params.set("searchTerm", value)
    //       }else{
    //           params.delete("searchTerm")
    //       }

    //       router.replace(`${pathname}?${params.toString()}`)

    //good approch solve rendering issue just only take one rendering

    if(debouncedReference.current){
      //14 minutes complete
    }
    debouncedReference.current = setTimeout(() => {
      const params = new URLSearchParams();

      if (value) {
        params.set("searchTerm", value);
      } else {
        params.delete("searchTerm");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };
  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        defaultValue={
          searchParams.get("searchTerm")
            ? searchParams.get("searchTerm")?.toString()
            : ""
        }
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="search"
        placeholder="search news..."
        className="pl-9"
      ></Input>
    </div>
  );
};

export default NewsSearchBar;
