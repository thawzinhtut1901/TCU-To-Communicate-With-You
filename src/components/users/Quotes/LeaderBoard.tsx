import { FirstRank, SecondRank, Star, ThirdRank } from "@/assets"
import { useGetQuoteRank } from "@/hooks"
import "./type.css"

const LeaderBoard = () => {
  const { data: getRank } = useGetQuoteRank();

  return (
    <div className="flex flex-col w-full max-h-[73vh] font-poppins overflow-auto scrollbar-hide">
      <div className="gap-4 grid bg-opacity-50 w-full">
        {getRank?.map((ranking: any, index: number) => {
          let rankImage;

          if (index === 0) {
            rankImage = <img src={FirstRank} alt="First Rank" className="w-12" />;
          } else if (index === 1) {
            rankImage = <img src={SecondRank} alt="Second Rank" className="w-12" />;
          } else if (index === 2) {
            rankImage = <img src={ThirdRank} alt="Third Rank" className="w-12" />;
          } else {
            rankImage = (
              <div className="flex justify-center items-center bg-black bg-opacity-60 px-3 py-1 rounded-full w-10 h-10 text-white">
                {index + 1}
              </div>
            );
          }

          return (
            <div key={ranking.id} className="items-center grid grid-cols-[80px_150px_1fr_100px] bg-gradient-to-t from-purple-300 to-purple-500 p-2 border-b border-b-white rounded-md">
              {/* Rank Column */}
              <div className="flex justify-center w-20">{rankImage}</div>

              {/* Username Column */}
              <div className="font-medium">{ranking?.user?.displayName}</div>

              {/* Quote Column */}
              <div className="border-gray-800 bg-white bg-opacity-20 px-4 py-2 border rounded-lg text-sm text-white truncate">
                {ranking?.quote}
              </div>

              {/* Vote Column */}
              <div className="flex justify-end items-center gap-2 w-24">
                <img src={Star} alt="Star" className="w-6 h-6" />
                <span className="font-medium">{ranking?.totalVotes}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
