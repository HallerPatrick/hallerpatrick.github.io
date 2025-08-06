---
license: apache-2.0
datasets:
- PatrickHaller/fineweb-3B
language:
- en
pipeline_tag: text-generation
---
# xLlaMA - A linearzed xLSTM language model

<div align="center">

<picture>
  <img alt="specify theme context for images" src="https://hallerpatrick.github.io/assets/images/xllama_logo.svg" width="400px">
</picture>

Building efficient linear language models


</div>

## What is xLlaMA?
<b>xLlaMA</b> linearization of the [SmolLM2-1.7B](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B) model with [mLSTM](https://arxiv.org/abs/2405.04517) as
the token mixer backbone. The model is aligned with 3B token subset of the Fineweb dataset, which we trained with a modified [MOHAWK](https://arxiv.org/abs/2408.10189) training scheme.

### Models

<b>xLlaMA</b> models come in different size, based on the <b>SmolLM2</b> collection.

| Model | HF Model | Base Model |
|---|---|---|
| xLlama-190M | 🤗 [xLlama-190M](https://huggingface.co/PatrickHaller/xLlama-190M) | 🤗 [SmolLM2-135M](https://huggingface.co/HuggingFaceTB/SmolLM2-135M) |
| xLlama-450M | 🤗 [xLlama-450M](https://huggingface.co/PatrickHaller/xLlama-450M) | 🤗 [SmolLM2-360M](https://huggingface.co/HuggingFaceTB/SmolLM2-360M) |
| xLlama-1.9B | 🤗 [xLlama-1.9B](https://huggingface.co/PatrickHaller/xLlama-1.9B) | 🤗 [SmolLM2-1.7B](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B) |


## Quickstart

### Installation

For now the model requires a CUDA enabled GPU to run.

```python
python -m pip install xlstm
python -m pip install mlstm_kernels
python -m pip install flash-attn --no-build-isolation
```

### Text Generation

```python

from transformers import AutoConfig, AutoModelForCausalLM, AutoTokenizer, pipeline

model_path = "PatrickHaller/xLlama-1.9B"

tokenizer = AutoTokenizer.from_pretrained(model_path)
config = AutoConfig.from_pretrained(model_path, mode="inference")
model = AutoModelForCausalLM.from_pretrained(model_path, config=config)

pipe = pipeline('text-generation', model=model, tokenizer=tokenizer)

pipe("Once upon a time, there was a")

```

## Evaluation

We evaluated each model against common LM benchmarks and also report the recvorage to the original teacher model.

<picture>
  <img alt="specify theme context for images" src="https://hallerpatrick.github.io/assets/images/eval_results_xllama.png" width="800px">
</picture>

## License

Like the SmolLM family, this model is licensed under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

