<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = $request->user()->products()->latest()
            ->filter($request->only('search','barcode'))
            ->paginate(20)->appends($request->all());

        return Inertia::render('Authenticated/Checkout/index', [
            'products' => $products,
            'filter' => $request->only('search','barcode'),
            'business' => ['taxPercent' => 0.15],
            //$request->user()->business(),
        ]);
    }
}