/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as createAstro } from '../../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Menu;
  let menuItems = [];
  let categories = [];
  let error = null;
  let successMessage = null;
  Astro2.url.searchParams.get("action");
  const editId = Astro2.url.searchParams.get("edit");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const supabase = getSupabaseClient();
      const formAction = formData.get("action");
      if (formAction === "create" || formAction === "update") {
        const itemData = {
          title: formData.get("title"),
          description: formData.get("description"),
          price: parseFloat(formData.get("price")),
          category: formData.get("category"),
          image: formData.get("image"),
          sold_out: formData.get("sold_out") === "on"
        };
        if (formAction === "create") {
          const { error: insertError } = await supabase.from("menu_items").insert([itemData]);
          if (insertError) throw insertError;
          successMessage = "Menu item created successfully!";
        } else {
          const id = formData.get("id");
          const { error: updateError } = await supabase.from("menu_items").update(itemData).eq("id", id);
          if (updateError) throw updateError;
          successMessage = "Menu item updated successfully!";
        }
      } else if (formAction === "delete") {
        const id = formData.get("id");
        const { error: deleteError } = await supabase.from("menu_items").delete().eq("id", id);
        if (deleteError) throw deleteError;
        successMessage = "Menu item deleted successfully!";
      }
    } catch (e) {
      error = e.message || "Failed to process request";
    }
  }
  try {
    const supabase = getSupabaseClient();
    const { data: items, error: fetchError } = await supabase.from("menu_items").select("*").order("category", { ascending: true }).order("title", { ascending: true });
    if (fetchError) {
      error = fetchError.message;
    } else {
      menuItems = items || [];
      categories = [...new Set(menuItems.map((item) => item.category).filter(Boolean))];
    }
  } catch (e) {
    error = e.message || "Failed to load menu items";
  }
  let editItem = null;
  if (editId) {
    editItem = menuItems.find((item) => item.id === editId);
  }
  return renderTemplate(_a || (_a = __template([`<html lang="fi" class="bg-dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin - Menu Management - Ravintola K\xE4skynkk\xE4</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500&display=swap" rel="stylesheet"><script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              dark: '#121212',
              surface: '#1E1E1E',
              accent: '#C4A484',
              light: '#F5F5F5',
              muted: '#A3A3A3',
            },
            fontFamily: {
              serif: ['"Cormorant Garamond"', 'serif'],
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    <\/script>`, '</head> <body class="bg-dark text-light font-sans min-h-screen"> <div class="max-w-7xl mx-auto px-4 py-8"> <!-- Header --> <header class="flex justify-between items-center mb-8 pb-6 border-b border-dark"> <div> <h1 class="font-serif text-3xl text-accent uppercase tracking-ultra">Menu Management</h1> <p class="text-muted mt-1">Add, edit, or remove menu items</p> </div> <div class="flex gap-4"> <a href="/admin/orders" class="px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-dark transition-colors font-sans uppercase tracking-wider text-sm">\nOrder Management\n</a> <a href="/" class="px-4 py-2 bg-accent text-dark hover:bg-accent/90 transition-colors font-sans uppercase tracking-wider text-sm">\nBack to Site\n</a> </div> </header> <!-- Messages --> ', " ", ' <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Form Section --> <div class="lg:col-span-1"> <div class="bg-surface border border-dark p-6 sticky top-8"> <h2 class="font-serif text-xl text-accent mb-6"> ', ' </h2> <form method="POST" class="space-y-4"> <input type="hidden" name="action"', "> ", ' <div> <label class="block text-muted text-sm mb-2 font-sans uppercase tracking-wider text-xs">Title</label> <input type="text" name="title"', ' required class="w-full bg-dark border border-dark text-light px-4 py-2 focus:border-accent outline-none transition-colors"> </div> <div> <label class="block text-muted text-sm mb-2 font-sans uppercase tracking-wider text-xs">Description</label> <textarea name="description" rows="3" class="w-full bg-dark border border-dark text-light px-4 py-2 focus:border-accent outline-none transition-colors">', '</textarea> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-muted text-sm mb-2 font-sans uppercase tracking-wider text-xs">Price (\u20AC)</label> <input type="number" name="price" step="0.01" min="0"', ' required class="w-full bg-dark border border-dark text-light px-4 py-2 focus:border-accent outline-none transition-colors"> </div> <div> <label class="block text-muted text-sm mb-2 font-sans uppercase tracking-wider text-xs">Category</label> <input type="text" name="category" list="categories"', ' required class="w-full bg-dark border border-dark text-light px-4 py-2 focus:border-accent outline-none transition-colors"> <datalist id="categories"> ', ' </datalist> </div> </div> <div> <label class="block text-muted text-sm mb-2 font-sans uppercase tracking-wider text-xs">Image URL</label> <input type="url" name="image"', ' placeholder="/images/dish-name.jpg" class="w-full bg-dark border border-dark text-light px-4 py-2 focus:border-accent outline-none transition-colors"> <p class="text-muted/60 text-xs mt-1">Path to image in /public/images/</p> </div> <div class="flex items-center gap-3 pt-2"> <input type="checkbox" id="sold_out" name="sold_out"', ' class="w-5 h-5 accent-accent bg-dark border-dark rounded"> <label for="sold_out" class="text-muted font-sans uppercase tracking-wider text-xs">Mark as Sold Out</label> </div> <div class="flex gap-3 pt-4"> <button type="submit" class="flex-1 px-4 py-3 bg-accent text-dark hover:bg-accent/90 transition-colors font-sans uppercase tracking-wider text-sm"> ', " </button> ", ' </div> </form> </div> </div> <!-- Menu Items List --> <div class="lg:col-span-2"> ', " </div> </div> </div> </body></html>"])), renderHead(), error && renderTemplate`<div class="bg-red-900/30 border border-red-500/50 text-red-200 p-4 mb-6"> <p>${error}</p> </div>`, successMessage && renderTemplate`<div class="bg-green-900/30 border border-green-500/50 text-green-200 p-4 mb-6"> <p>${successMessage}</p> </div>`, editItem ? "Edit Item" : "Add New Item", addAttribute(editItem ? "update" : "create", "value"), editItem && renderTemplate`<input type="hidden" name="id"${addAttribute(editItem.id, "value")}>`, addAttribute(editItem?.title || "", "value"), editItem?.description || "", addAttribute(editItem?.price || "", "value"), addAttribute(editItem?.category || "", "value"), categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}></option>`), addAttribute(editItem?.image || "", "value"), addAttribute(editItem?.sold_out || false, "checked"), editItem ? "Update Item" : "Add Item", editItem && renderTemplate`<a href="/admin/menu" class="px-4 py-3 border border-muted text-muted hover:border-light hover:text-light transition-colors font-sans uppercase tracking-wider text-sm">
Cancel
</a>`, menuItems.length === 0 ? renderTemplate`<div class="text-center py-16 bg-surface border border-dark"> <p class="text-muted text-lg">No menu items yet</p> <p class="text-muted/60 text-sm mt-2">Use the form to add your first item</p> </div>` : renderTemplate`<div class="space-y-4"> ${categories.map((category) => {
    const items = menuItems.filter((item) => item.category === category);
    return renderTemplate`<div class="bg-surface border border-dark"> <div class="p-4 border-b border-dark"> <h3 class="font-serif text-lg text-accent uppercase tracking-wider">${category}</h3> </div> <div class="divide-y divide-dark"> ${items.map((item) => renderTemplate`<div class="p-4 flex justify-between items-start gap-4"> <div class="flex-1"> <div class="flex items-center gap-3 mb-1"> <h4${addAttribute(`font-medium ${item.sold_out ? "text-muted line-through" : "text-light"}`, "class")}> ${item.title} </h4> ${item.sold_out && renderTemplate`<span class="px-2 py-0.5 bg-red-900/30 text-red-400 text-xs font-sans uppercase tracking-wider">
Sold Out
</span>`} </div> ${item.description && renderTemplate`<p class="text-muted text-sm mb-2">${item.description}</p>`} <p class="text-accent">€${item.price.toFixed(2)}</p> </div> <div class="flex gap-2"> <a${addAttribute(`/admin/menu?edit=${item.id}`, "href")} class="px-3 py-1.5 border border-accent text-accent hover:bg-accent hover:text-dark transition-colors font-sans uppercase tracking-wider text-xs">
Edit
</a> <form method="POST" class="inline"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="id"${addAttribute(item.id, "value")}> <button type="submit" onclick="return confirm('Are you sure you want to delete this item?')" class="px-3 py-1.5 border border-red-500/50 text-red-400 hover:bg-red-900/30 transition-colors font-sans uppercase tracking-wider text-xs">
Delete
</button> </form> </div> </div>`)} </div> </div>`;
  })} </div>`);
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/admin/menu.astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/admin/menu.astro";
const $$url = "/admin/menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Menu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
