'use client';
import { Typography } from '@/components/Typography/typography.component';
import { Box } from '@mui/material';
import { MenuItem, MenuSectionType } from '../../menuItems';

const MENU_SECTION_NAMES = {
	smallBitesCollection: 'SMALL BITES',
	bigBitesCollection: 'BIG BITES',
	desertsCollection: 'DESERT',
	drinksCollection: 'DRINKS',
} as const;

export const MenuSection = ({
	menuItems,
	menuSection,
}: {
	menuItems: MenuItem[];
	menuSection: MenuSectionType;
}) => {
	console.log(menuItems);
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<Typography
				variant="headingTwo"
				weight="900"
				fontStyle="italic"
				id={`${menuSection}_list`}
			>
				{MENU_SECTION_NAMES[menuSection]}
			</Typography>
			<Box
				component="ul"
				sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
				aria-labelledby={`${menuSection}_list`}
			>
				{menuItems.map((option, index) => (
					<Box
						key={index}
						sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
						component="li"
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: '8px',
							}}
						>
							<Typography
								variant="small"
								weight="500"
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{option.name}
							</Typography>
							{/* <Box
                  sx={{
                    borderWidth: 0,
                    borderStyle: 'dashed',
                    borderBottomWidth: '1px',
                    transform: 'translateY(-40%)',
                    // width: '100%',
                    flexGrow: 2,
                    margin: '0 8px',
                    display: 'flex',
                  }}
                ></Box> */}
							<Typography
								variant="base"
								sx={{ color: theme => theme.palette.aceOrange }}
							>
								{option.price}
							</Typography>
						</Box>
						<Typography variant="miniscule" fontStyle="italic">
							{option.itemDescription}
						</Typography>
						{/* <Typography variant="miniscule" fontStyle="italic">
                {option.ingredients}
              </Typography> */}
					</Box>
				))}
			</Box>
		</Box>
	);
};
