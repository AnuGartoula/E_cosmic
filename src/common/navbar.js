import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./navbar.css";

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className="NavigationMenuRoot">
			<NavigationMenu.List className="NavigationMenuList">
            <NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Collections
					</NavigationMenu.Trigger>
					
				</NavigationMenu.Item>
                <NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Formulas<CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								href=""
							>Vitamin C 
							</ListItem>
							<ListItem
							href="">
							BHA/Salicylic Acid
                           </ListItem>
							<ListItem 
                             href="">
						Niacinamide 
							</ListItem>
							<ListItem
							href=""
							>UV Filters
							</ListItem>
                            <ListItem
							href=""
							>Ceramide
							</ListItem>
                           
                            <ListItem
							href=""
							> Retinoid / Retinol
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						All Skincare <CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								href=""
							>Serums
							</ListItem>
							<ListItem
							href="">
							Mosturizer
							</ListItem>
							<ListItem 
                             href="">
							Exfoliators
							</ListItem>
							<ListItem
							href=""
							>Facial cleansers
							</ListItem>
							<ListItem
							href=""
							>Face oils
							</ListItem>
							<ListItem
							href=""
							>Toners
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
                <NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Body + Hair <CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								href=""
							>All Body + Hair
							</ListItem>
							<ListItem
							href="">
							Body Care
							</ListItem>
							<ListItem 
                             href="">
							Lash and Brows Treatment
							</ListItem>
							<ListItem
							href=""
							>Hair and Scalp Solution 
							</ListItem>
						
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						New Arrivals<CaretDownIcon className="CaretDown" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List two">
							<ListItem
								href=""
							>Mascaras
							</ListItem>
							<ListItem
							href="">
							Foundation
							</ListItem>
							<ListItem 
                             href="">
							Lip oils
							</ListItem>
							<ListItem
							href=""
							>Bath and Body
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>


                <NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Under Rs.500
					</NavigationMenu.Trigger>
					
				</NavigationMenu.Item>

                <NavigationMenu.Item>
					<NavigationMenu.Trigger className="NavigationMenuTrigger">
						Gift and Sales
					</NavigationMenu.Trigger>
					
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="NavigationMenuIndicator">
					<div className="Arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="ViewportPosition">
				<NavigationMenu.Viewport className="NavigationMenuViewport" />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames("ListItemLink", className)}
					{...props}
					ref={forwardedRef}
				>
					<div className="ListItemHeading">{title}</div>
					<p className="ListItemText">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

export default NavigationMenuDemo;
