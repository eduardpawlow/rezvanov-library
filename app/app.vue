<template>
  <UApp 
		:toaster="{
			disableSwipe: true,
			position: 'top-right',
		}"
	>
		<UHeader 
			:toggle="false"
			title="Резванов С. В."
		/>

    <UMain >
			<NuxtPage />
    </UMain>
		
		<UFooter>
			<template #left>
				Copyright © {{ new Date().getFullYear() }}
			</template>
			<template #right>
				Сайт создал 
				<ULink 
					external
					target="_blank"
					href="https://t.me/eduardpawlow"
				>
					Эдуард Павлов
				</ULink>
			</template>
		</UFooter>
  </UApp>
</template>
