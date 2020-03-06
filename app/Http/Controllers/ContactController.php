<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    public function index(){
        $contact = Contact::all();

        return response()->json($contact);
    }

    public function create(Request $request){
        $contact = Contact::create([
            'name' => $request->name,
            'tel' => $request->tel

        ]);
        return response()->json($contact);

    }

    public function edit($id){
        $contact = Contact::find($id);

        return response()->json($contact);

    }

    public function update(Request $request,$id){
        $contact = Contact::find($id)->update([
            'name' => $request->name,
            'tel' => $request->tel,
        ]);
        return response()->json($contact);

    }

    public function delete($id){
        $contact = Contact::find($id)->delete();
        return response()->json($contact);
    }

}
