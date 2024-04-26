<section class="relative flex w-full pl-[10px] xl:pl-[70px] pb-[5px] xl:pb-[35px]">
	<div class="relative flex h-full w-full flex-row-reverse gap-3 overflow-hidden rounded-bl-3xl bg-secondary xl:rounded-bl-[75px]">
        <div class="w-1/4  bg-primary/10 ">
            <div class="p-8 h-full">
                <div class="">
                    <h1 class="mb-4 text-xl font-bold text-primary">Author</h1>
                    <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-primary rounded-lg shadow-md">
                        <div class="-mx-4">
                            <img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full">
                                <p><a href="#" class="mx-1 font-bold text-secondary hover:underline">Alex John</a><span
                                        class="text-sm font-light text-secondary">Created 23 Posts</span></p>
                            </div>
                    </div>
                </div>
                <div class=" mt-10">
                    <h1 class="mb-4 text-xl font-bold text-secondary">Categories</h1>
                    <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-primary rounded-lg shadow-md">
                        <ul>
                            <li><a href="#" class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">-
                                    AWS</a></li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">-
                                    Laravel</a></li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">- Vue</a>
                            </li>
                            <li class="mt-2"><a href="#"
                                    class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                            <li class="flex items-center mt-2"><a href="#"
                                    class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">-
                                    Django</a></li>
                            <li class="flex items-center mt-2"><a href="#"
                                    class="mx-1 font-bold text-secondary hover:text-gray-600 hover:underline">- PHP</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class=" mt-10">
                    <h1 class="mb-4 text-xl font-bold text-secondary">Recent Post</h1>
                    <div class="flex flex-col max-w-sm  py-6 mx-auto bg-primary rounded-lg shadow-md">
                        <div class="flex items-center justify-center"><a href="#"
                                class="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div class="mt-4"><a href="#" class="text-lg font-medium text-secondary hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" class="object-cover w-8 h-8 rounded-full"><a href="#"
                                    class="mx-3 text-sm text-secondary hover:underline">Alex John</a></div><span
                                class="text-sm font-light text-gray-600">Jun 1, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div class="w-3/4">
            <slot />
        </div>
	</div>
</section>
