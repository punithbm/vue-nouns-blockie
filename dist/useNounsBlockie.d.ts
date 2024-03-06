export default function useNounsBlockie(props: {
    input: string;
    height?: string;
    width?: string;
    alt?: string;
    shape?: "square" | "rounded" | "circle";
}): {
    nounAvatarUrl: import("vue").ComputedRef<string>;
    avatarShape: import("vue").ComputedRef<"square" | "rounded" | "circle">;
};
