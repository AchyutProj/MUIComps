import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, IconButton } from '@mui/material';
import MaterialReactTable, {
    MRT_ColumnDef,
    MaterialReactTableProps
} from 'material-react-table';
import {useMemo} from 'react';

const ANTable = (props: Partial<MaterialReactTableProps<any>> & {
    isLoading?: boolean
    pagination?: any
    columnFilters?: any
    globalFilter?: any
    setColumnFilters?: any
    setGlobalFilter?: any
    setPagination?: any
    enableColumnFilters?: boolean
    setSorting?: any
    initialState?: any
    state?: any
    onDownload?: () => void
}) => {

    const {
        data,
        columns,
        isLoading,
        pagination,
        columnFilters,
        globalFilter,
        setColumnFilters,
        setGlobalFilter,
        setPagination,
        setSorting,
        state,
        initialState,
        enableColumnFilters,
        onDownload,
        ...rest
    } = props

    // const [isError, setIsError] = useState(false);
    // const [isRefetching, setIsRefetching] = useState(false);

    const memoizedColumns = useMemo<MRT_ColumnDef<any>[]>(
        () => columns!,
        [columns],
    );
    const memoizedData = useMemo<MRT_ColumnDef<any>[]>(
        () => data!,
        [data],
    );

    return (
        <MaterialReactTable
            enableColumnFilters={enableColumnFilters ?? false}
            enableSorting={false}
            manualFiltering
            manualPagination
            manualSorting
            enableRowNumbers
            onColumnFiltersChange={setColumnFilters}
            onGlobalFilterChange={setGlobalFilter}
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            positionActionsColumn="last"
            rowNumberMode="static"
            getRowId={(row) => row.id}
            data={memoizedData}
            columns={memoizedColumns}
            enableDensityToggle={false}
            // muiToolbarAlertBannerProps={
            //     isError
            //         ? {
            //             color: 'error',
            //             children: 'Error loading data',
            //         }
            //         : undefined
            // }
            renderTopToolbarCustomActions={() => (
                onDownload && <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
                    <IconButton
                        onClick={onDownload}
                    >
                        <SaveAltIcon />
                    </IconButton>
                </Box>
            )}
            state={{
                isLoading: isLoading ?? false,
                pagination,
                columnFilters,
                globalFilter,
                density: 'compact',
                showAlertBanner: false,
                ...state
            }}
            initialState={{
                columnPinning: {
                    left: [], right: ['mrt-row-actions']
                },
                ...initialState
            }}
            {...rest}
        />
    );
};

export default ANTable;
