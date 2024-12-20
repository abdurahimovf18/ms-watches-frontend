import React from "react";


export default async function AccountLayout(
{ children }: Readonly<{
	children: React.ReactNode;
}>) {
  return (
		<>
    	{children}
		</>
  );
}
