'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeContextProvider } from '@/components/Theme-Context/themeContext.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();

export const Providers = ({ children }) => {
	return (
		<QueryClientProvider client={client}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeContextProvider>{children}</ThemeContextProvider>
			</LocalizationProvider>
			{/* <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition="bottom-left"
        position="bottom"
        styleNonce=""
      /> */}
		</QueryClientProvider>
	);
};
