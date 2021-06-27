<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company;

class CompanyController extends Controller
{
  public function index(){

        $companies = Company::orderBy('id', 'DESC')->with('sales','payments')->get();
        return response()->json([
            'status' => 'SUCCESS',
            'companies' => $companies
        ]);
  }


  public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:companies',
            'phone' => 'required|unique:companies',
            'address' => 'required',
        ]);

        $company = new Company();
        $company->name = $request->name;
        $company->address = $request->address;
        $company->phone = $request->phone;
        $company->status = 1;
        if ($company->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => "company added successfully"
            ]);
        }
    }

    public function edit($id){

         $company= Company::findOrFail($id);
       return response()->json($company);

  }

  public function update(Request $request,$id)
    {
        $this->validate($request, [
            'name' => 'required|unique:companies,name,'.$id,
            'phone' => 'required|unique:companies,phone,'.$id,
            'address' => 'required'
        ]);

        $company= Company::findOrFail($id);
        $company->name = $request->name;
        $company->address = $request->address;
        $company->phone = $request->phone;
        if ($company->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => "updated successfully"
            ]);
        }
    }


       public function active($id)
    {
        $company = Company::find($id);
        if ($company) {
            $company->status = 1;
            if ($company->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'active successfully'
                ]);
            }
        }
    }

    public function deActive($id)
    {
        $company = Company::find($id);
        if ($company) {
            $company->status = 0;
            if ($company->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'de-activet'
                ]);
            }
        }
    }

}
