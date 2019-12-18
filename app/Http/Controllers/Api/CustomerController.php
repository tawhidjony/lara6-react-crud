<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Storage;

class customerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer=Customer::orderBy('id','desc')->paginate(10);
        return response()->json($customer);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $image = $request->file('photo');

        if ($image) {
            $path = Storage::putFile('customer', $image);
            if ($path) {
                $data['photo'] = $path;
            }
        }else{
            $path='';
        }
       
        $customer = Customer::create($data);

        if ($customer){
            return response()->json(['message' => 'Customer created Successfully'], 200);
        }else{
            return response()->json(['message' => 'Customer created failed!'], 400);

        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function edit($id)
    // {
    //     $customer=Customer::find($id);
    //     return response()->json($customer, ['message' => 'Customer edit failed!'], 400);
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      
      
        $customer = Customer::findOrFail($id);
        if($customer){
            $image = $request->file('photo');
            if ($image) {
                $path = Storage::putFile('customer', $image);
                if ($path) {
                    $data['photo'] = $path;
                    if (isset($customer->photo)) {
                        Storage::delete($customer->photo);
                    }
                }
            }
           
            $customer->update($request->all());
             return  $customer;
        }else{
            return response()->json(['message' => 'Customer Update Fail!..'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id);

        if ($customer) {
            if(isset($customer->photo))
                Storage::delete($customer->photo);
            $customer->delete();
            return response()->json(['message' => 'Customer Delete Successfully'], 200);
        }else{
            return response()->json(['message' => 'Customer Delete Fail!...'], 500);
        }
    }
}
