
import { Input } from "@/components/ui/input";

const SearchInput = ({ search, setSearch }) => (
    <Input
        placeholder="Search docs…"
        className="h-8 text-xs mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
);

export default SearchInput;