<?php

namespace App\Http\Controllers\Bible;

use App\Glossary;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GlossaryController extends Controller
{
    private $glossary;

    public function __construct(Glossary $glossarys) {

        $this->glossary = $glossarys;
    }

    public function index(){

        return response()->json($this->glossary::paginate(10));
    }

    public function show($id) {

        $book = $this->glossary->find($id);

        if(!$book) return response()->json(['data' => ['msg'=> 'Glossário não encontrado!']], 404);

        $data = ['data' => $book];

        return response()->json($data);
    }

    public function store(Request $request) {

        try {

            $data = $request->all();

            $this->glossary->create($data);

            $msg_return = ['data' => ['Glossário criado com sucesso!']];

            return response()->json($msg_return, 201);
        } catch (\Throwable $th) {

            if(config('app.debug')) {

                return response()->json($th->getMessage(), 424);
            }

            return response()->json('Houve um erro ao realizar a ação!', 424);
        }
    }

    public function update($id,Request $request) {

        try {

            $data = $request->all();

            $book = $this->glossary->find($id);

            $book->update($data);

            $msg_return = ['data' => ['Glossário atualizado com sucesso!']];

            return response()->json($msg_return, 201);
        } catch (\Throwable $th) {

            if(config('app.debug')) {

                return response()->json($th->getMessage(), 424);
            }

            return response()->json(ApiError::errorMessage('Houve um erro ao realizar a ação!', 424));
        }
    }

    public function delete(Glossary $id) {

        try {

            $id->delete();

            $msg_return = ['data' => ['Glossário deletado com sucesso!']];

            return response()->json($msg_return, 200);

        }  catch (\Throwable $th) {

            if(config('app.debug')) {

                return response()->json(ApiError::errorMessage($e->getMessage(), 424));
            }

            return response()->json(ApiError::errorMessage('Houve um erro ao realizar a ação!', 424));
        }
    }
}
