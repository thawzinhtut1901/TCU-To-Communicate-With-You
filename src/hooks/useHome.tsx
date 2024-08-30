import { getPublishQuotes } from "@/API"
import { useQuery } from "@tanstack/react-query"

export const useGetPublishQuotes = () => {
    return useQuery({queryKey:["publish-quotes"], queryFn: () => getPublishQuotes()});
}