<?php

namespace App\Http\Controllers\Shop;

use App\Enums\UserRoleEnum;
use App\Http\Controllers\Controller;
use App\Http\Traits\UtilityTrait;
use App\Models\Shop;
use App\Repositories\All\Shops\ShopsInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ShopController extends Controller
{

    use UtilityTrait;
    public function __construct(
        protected ShopsInterface $shopsInterface,
    ) {}



    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->all(['searchParam', 'sortBy', 'sortDirection', 'rowPerPage', 'page']);
        $filters['sortBy'] ??= 'created_at';
        $filters['sortDirection'] ??= 'desc';
        $filters['rowPerPage'] ??= 20;
        $filters['status'] ??= null;
        return Inertia::render('Admin/Shop/All/Index', [
            'shops' => $this->shopsInterface->filter($filters),
            'filters' => $filters,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     */
    public function save(Request $request)
    {
        // Validate request inputs
        $request->validate([
            'shop_name' => 'nullable|string|max:255',
            'shop_address' => 'nullable|string|max:255',
            'location' => 'nullable|string',
            'open_time' => 'nullable|string',
            'close_time' => 'nullable|string',
            'shop_status' => 'nullable|in:open,closed',
            'description' => 'nullable|string',
            'rating' => 'nullable|numeric|min:0|max:5',
            'logo' => 'nullable|image|max:2048',
            'cover' => 'nullable|image|max:4096',
        ]);

        $user = Auth::user();

        // Get existing shop or create new
        $shop = $user->shop ?? new Shop();

        // Handle logo upload
        if ($request->hasFile('logo')) {
            if ($shop->logo) {
                Storage::disk('public')->delete($shop->logo);
            }
            $shop->logo = $request->file('logo')->store('shops/logos', 'public');
        }

        // Handle cover upload
        if ($request->hasFile('cover')) {
            if ($shop->cover) {
                Storage::disk('public')->delete($shop->cover);
            }
            $shop->cover = $request->file('cover')->store('shops/covers', 'public');
        }

        // Assign other fields
        $shop->user_id = $user->id;
        $shop->shop_name = $request->shop_name;
        $shop->shop_address = $request->shop_address;
        $shop->location = $request->location;
        $shop->open_time = $request->open_time;
        $shop->close_time = $request->close_time;
        $shop->shop_status = $request->shop_status;
        $shop->description = $request->description;
        $shop->rating = $request->rating;

        $shop->save();

        return redirect()->route('shop.index')->with('success', 'Shop saved successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->shopsInterface->deleteById($id);
        return redirect()->back()->with('success', 'Shop deleted successfully');
    }
}
