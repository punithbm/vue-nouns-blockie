import { computed } from "vue";
import getNounAvatar from "./nouns";

export default function useNounsBlockie(props: { input: string; height?: string; width?: string; alt?: string; shape?: "square" | "rounded" | "circle" }) {
  const nounAvatarUrl = computed(() => getNounAvatar(props.input));
  const avatarShape = computed(() => {
    switch (props.shape) {
      case "rounded":
        return "rounded";
      case "circle":
        return "circle";
      default:
        return "square";
    }
  });

  return { nounAvatarUrl, avatarShape };
}
