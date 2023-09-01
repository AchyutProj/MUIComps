import {MRT_Row} from "material-react-table";
import {useState} from "react";
import {ColumnFilterProps} from "@anTypes/table.ts";
import {anAuthFetch} from "@anFetchers/apiFetcher.ts";

export const useTable = () => {
    const [data, setData] = useState<any[]>([]);
    const [rowCount, setRowCount] = useState(0);
    const [columnFilters, setColumnFilters] = useState(
        [],
    );
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [rowSelection, setRowSelection] = useState({});
    const [draggingRow, setDraggingRow] = useState<MRT_Row<any> | null>(null);
    const [hoveredTable, setHoveredTable] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const getData = (queryKey: string, method = "POST", onSuccess?: (data: any) => void, params?: any) => {

        setIsLoading(true);

        const columnFiltersObj = columnFilters.reduce((acc: { [key: string]: any }, filter: ColumnFilterProps) => {
            acc[filter.id] = filter.value;
            return acc;
        }, {});

        anAuthFetch(queryKey, {
            page: pagination.pageIndex + 1,
            size: pagination.pageSize,
            query: globalFilter,
            ...columnFiltersObj,
            ...params
        }, method).then((data) => {
            if (onSuccess) {
                onSuccess(data)
                return
            }
            setData([...(data?.data || [])])
            setRowCount(data.count)
            setIsLoading(false);
        });

        return isLoading;
    };

    return {
        rowCount,
        setRowCount,
        columnFilters,
        setColumnFilters,
        globalFilter,
        setGlobalFilter,
        setSorting,
        sorting,
        pagination,
        setPagination,
        rowSelection,
        setRowSelection,
        data,
        setData,
        getData,
        draggingRow,
        setDraggingRow,
        hoveredTable,
        setHoveredTable
    }
}