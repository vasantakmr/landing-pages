import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
require("dotenv").config();

const BASEURL = process.env.BASE_URL || "https://gurucodes.dev";

// TODO: change the website name with current link
export const ShareButton = ({ id }: { id: string }) => {
  const shareContent = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Example Title",
          text: "Check out this amazing content!",
          url: `${BASEURL}/jobs/${id}`,
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.error("Error sharing content:", error));
    } else {
      console.error("Web Share API is not supported.");
    }
  };

  return (
    <Button variant="outline" onClick={shareContent}>
      <Share2 />
    </Button>
  );
};

export default ShareButton;
