import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ShareButton = () => {
  const shareContent = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Example Title",
          text: "Check out this amazing content!",
          url: "https://example.com",
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.error("Error sharing content:", error));
    } else {
      console.error("Web Share API is not supported.");
    }
  };

  return (
    <Button onClick={shareContent}>
      <Share2 />
    </Button>
  );
};

export default ShareButton;
